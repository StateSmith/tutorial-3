import java.util.Scanner;
import my_light_package.LightSm;

public class Program {
    public static void main(String[] args) {
        LightSm sm = new LightSm();
        Scanner scanner = new Scanner(System.in);

        System.out.println("USAGE:");
        System.out.println("  type i <enter> to send INC event to state machine.");
        System.out.println("  type d <enter> to send DIM event to state machine.");
        System.out.println("  type o <enter> to send OFF event to state machine.");
        System.out.println("");
        System.out.println("Hit <enter> to start");
        scanner.nextLine(); // Waits for user to press Enter

        sm.start();

        while (true) {
            readInputRunSm(sm, scanner);
        }
    }

    private static void readInputRunSm(LightSm sm, Scanner scanner) {
        System.out.println("\nCurrent state: " + LightSm.stateIdToString(sm.stateId));
        System.out.print("Please type 'i', 'd', 'o': ");

        String line = scanner.nextLine();
        char c = '\0';

        if (line.length() > 0)
            c = line.charAt(0); // Get the first character

        runSmForChar(sm, c);
    }

    private static void runSmForChar(LightSm sm, char c) {
        boolean validInput = true;
        LightSm.EventId eventId = LightSm.EventId.OFF;

        switch (c) {
            case 'i':
                eventId = LightSm.EventId.INC;
                break;
            case 'd':
                eventId = LightSm.EventId.DIM;
                break;
            case 'o':
                eventId = LightSm.EventId.OFF;
                break;
            default:
                validInput = false;
                break;
        }

        if (validInput) {
            System.out.println("Dispatching event: " + LightSm.eventIdToString(eventId));
            sm.dispatchEvent(eventId);
        } else {
            System.err.println("Invalid input. Not running state machine.");
        }
    }
}
